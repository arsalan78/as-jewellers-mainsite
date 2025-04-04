
import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Edit, Trash, Plus } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const initialCollections = [
  {
    id: 1,
    title: "Wedding Collection",
    description: "Timeless pieces for your special day",
    imageUrl: "https://images.unsplash.com/photo-1535632066274-1f274baa80cb?q=80&w=2340&auto=format&fit=crop",
    category: "Bridal",
    subcategories: ["Engagement Rings", "Wedding Bands", "Bridal Sets"]
  },
  {
    id: 2,
    title: "Royal Necklaces",
    description: "Statement pieces fit for royalty",
    imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2187&auto=format&fit=crop",
    category: "Necklaces",
    subcategories: ["Chokers", "Pendants", "Chains", "Mangalsutras"]
  },
  {
    id: 3,
    title: "Signature Rings",
    description: "Elegant designs for every occasion",
    imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2340&auto=format&fit=crop",
    category: "Rings",
    subcategories: ["Solitaire", "Cocktail", "Eternity", "Statement"]
  },
  {
    id: 4,
    title: "Modern Earrings",
    description: "Contemporary styles with classic craftsmanship",
    imageUrl: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?q=80&w=2187&auto=format&fit=crop",
    category: "Earrings",
    subcategories: ["Studs", "Hoops", "Drops", "Chandeliers"]
  },
  {
    id: 5,
    title: "Artisan Bracelets",
    description: "Handcrafted with precision and care",
    imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2340&auto=format&fit=crop",
    category: "Bracelets",
    subcategories: ["Tennis", "Bangles", "Cuffs", "Charm"]
  },
  {
    id: 6,
    title: "Heirloom Pendants",
    description: "Treasures to pass down through generations",
    imageUrl: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=2340&auto=format&fit=crop",
    category: "Pendants",
    subcategories: ["Religious", "Lockets", "Gemstone", "Pearl"]
  }
];

type Collection = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  subcategories: string[];
};

const AdminCollections = () => {
  const [collections, setCollections] = useState<Collection[]>(initialCollections);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentCollection, setCurrentCollection] = useState<Collection | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    category: '',
    subcategories: ''
  });
  const { toast } = useToast();

  const handleOpenEditDialog = (collection: Collection) => {
    setCurrentCollection(collection);
    setFormData({
      title: collection.title,
      description: collection.description,
      imageUrl: collection.imageUrl,
      category: collection.category,
      subcategories: collection.subcategories.join(', ')
    });
    setIsDialogOpen(true);
  };

  const handleOpenAddDialog = () => {
    setCurrentCollection(null);
    setFormData({
      title: '',
      description: '',
      imageUrl: '',
      category: '',
      subcategories: ''
    });
    setIsDialogOpen(true);
  };

  const handleOpenDeleteDialog = (collection: Collection) => {
    setCurrentCollection(collection);
    setIsDeleteDialogOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveCollection = () => {
    try {
      const subcategoriesArray = formData.subcategories.split(',').map(item => item.trim());
      
      if (currentCollection) {
        // Edit existing collection
        setCollections(prev => prev.map(item => 
          item.id === currentCollection.id ? 
          {
            ...item,
            title: formData.title,
            description: formData.description,
            imageUrl: formData.imageUrl,
            category: formData.category,
            subcategories: subcategoriesArray
          } : item
        ));
        
        toast({
          title: "Collection updated",
          description: `${formData.title} has been updated successfully.`
        });
      } else {
        // Add new collection
        const newId = collections.length > 0 ? Math.max(...collections.map(c => c.id)) + 1 : 1;
        
        setCollections(prev => [
          ...prev,
          {
            id: newId,
            title: formData.title,
            description: formData.description,
            imageUrl: formData.imageUrl,
            category: formData.category,
            subcategories: subcategoriesArray
          }
        ]);
        
        toast({
          title: "Collection added",
          description: `${formData.title} has been added successfully.`
        });
      }
      
      setIsDialogOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem saving the collection.",
        variant: "destructive"
      });
    }
  };

  const handleDeleteCollection = () => {
    if (currentCollection) {
      setCollections(prev => prev.filter(item => item.id !== currentCollection.id));
      
      toast({
        title: "Collection deleted",
        description: `${currentCollection.title} has been deleted.`
      });
      
      setIsDeleteDialogOpen(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-playfair font-bold text-elegance-navy">Collections</h2>
        <Button onClick={handleOpenAddDialog} className="bg-elegance-pink hover:bg-elegance-pink/90">
          <Plus className="mr-2 h-4 w-4" /> Add Collection
        </Button>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead className="hidden md:table-cell">Subcategories</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {collections.map((collection) => (
              <TableRow key={collection.id}>
                <TableCell>
                  <div className="h-10 w-10 rounded-md overflow-hidden">
                    <img 
                      src={collection.imageUrl} 
                      alt={collection.title} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  {collection.title}
                  <p className="text-sm text-gray-500 md:hidden">{collection.category}</p>
                </TableCell>
                <TableCell className="hidden md:table-cell">{collection.category}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <div className="max-w-[200px] truncate">
                    {collection.subcategories.join(', ')}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleOpenEditDialog(collection)}
                    >
                      <Edit className="h-4 w-4 text-elegance-navy" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleOpenDeleteDialog(collection)}
                    >
                      <Trash className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Add/Edit Collection Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {currentCollection ? 'Edit Collection' : 'Add New Collection'}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Collection Title"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Brief description"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  placeholder="E.g. Rings, Necklaces, Earrings"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subcategories">
                  Subcategories (comma-separated)
                </Label>
                <Input
                  id="subcategories"
                  name="subcategories"
                  value={formData.subcategories}
                  onChange={handleInputChange}
                  placeholder="E.g. Wedding Bands, Engagement Rings"
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSaveCollection}
              className="bg-elegance-pink hover:bg-elegance-pink/90"
            >
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Delete Collection</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>
              Are you sure you want to delete "{currentCollection?.title}"? This action cannot be undone.
            </p>
          </div>
          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleDeleteCollection}
              variant="destructive"
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminCollections;
