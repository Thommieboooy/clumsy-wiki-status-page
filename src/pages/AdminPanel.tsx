
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import WikiContent from '@/components/WikiContent';
import { useNavigate } from 'react-router-dom';

interface WikiPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  category: string;
  created_at: string;
}

const AdminPanel = () => {
  const { isAdmin, user } = useAuth();
  const [wikiPages, setWikiPages] = useState<WikiPage[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPage, setEditingPage] = useState<WikiPage | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    category: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    if (!isAdmin) {
      toast({
        title: "Geen toegang",
        description: "Je hebt geen admin rechten.",
        variant: "destructive",
      });
      navigate('/');
      return;
    }

    fetchWikiPages();
  }, [user, isAdmin, navigate]);

  const fetchWikiPages = async () => {
    try {
      const { data, error } = await supabase
        .from('wiki_pages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setWikiPages(data || []);
    } catch (error) {
      console.error('Error fetching wiki pages:', error);
      toast({
        title: "Fout",
        description: "Kon wiki pagina's niet laden.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingPage) {
        // Update existing page
        const { error } = await supabase
          .from('wiki_pages')
          .update({
            title: formData.title,
            slug: formData.slug,
            content: formData.content,
            category: formData.category,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingPage.id);

        if (error) throw error;
        toast({
          title: "Bijgewerkt",
          description: "Wiki pagina is bijgewerkt.",
        });
      } else {
        // Create new page
        const { error } = await supabase
          .from('wiki_pages')
          .insert({
            title: formData.title,
            slug: formData.slug,
            content: formData.content,
            category: formData.category,
            author_id: user?.id
          });

        if (error) throw error;
        toast({
          title: "Aangemaakt",
          description: "Nieuwe wiki pagina is aangemaakt.",
        });
      }

      setIsDialogOpen(false);
      setEditingPage(null);
      setFormData({ title: '', slug: '', content: '', category: '' });
      fetchWikiPages();
    } catch (error) {
      console.error('Error saving wiki page:', error);
      toast({
        title: "Fout",
        description: "Kon wiki pagina niet opslaan.",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (page: WikiPage) => {
    setEditingPage(page);
    setFormData({
      title: page.title,
      slug: page.slug,
      content: page.content,
      category: page.category
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Weet je zeker dat je deze pagina wilt verwijderen?')) return;

    try {
      const { error } = await supabase
        .from('wiki_pages')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({
        title: "Verwijderd",
        description: "Wiki pagina is verwijderd.",
      });
      fetchWikiPages();
    } catch (error) {
      console.error('Error deleting wiki page:', error);
      toast({
        title: "Fout",
        description: "Kon wiki pagina niet verwijderen.",
        variant: "destructive",
      });
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <WikiContent>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Panel - Wiki Beheer</h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => {
                setEditingPage(null);
                setFormData({ title: '', slug: '', content: '', category: '' });
              }}>
                Nieuwe Wiki Pagina
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingPage ? 'Wiki Pagina Bewerken' : 'Nieuwe Wiki Pagina'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Titel</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => {
                      setFormData({ ...formData, title: e.target.value });
                      if (!editingPage) {
                        setFormData(prev => ({ ...prev, slug: generateSlug(e.target.value) }));
                      }
                    }}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Slug (URL)</label>
                  <Input
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Categorie</label>
                  <Input
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="bijv. IT, Faciliteiten, Veiligheid"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Inhoud (Markdown)</label>
                  <textarea
                    className="w-full h-64 p-3 border border-gray-300 rounded-md"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    required
                    placeholder="# Titel

## Subtitel

Jouw inhoud hier..."
                  />
                </div>

                <div className="flex gap-2">
                  <Button type="submit">
                    {editingPage ? 'Bijwerken' : 'Aanmaken'}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Annuleren
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-4">
          {wikiPages.map((page) => (
            <Card key={page.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{page.title}</CardTitle>
                    <p className="text-sm text-gray-500 mt-1">
                      /{page.slug} • {page.category}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(page)}
                    >
                      Bewerken
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(page.id)}
                    >
                      Verwijderen
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {page.content.substring(0, 200)}...
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </WikiContent>
  );
};

export default AdminPanel;
