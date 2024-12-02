import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const CreateForm = () => {
  const [addBook, setAddBook] = useState(false);
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    year: "",
    title: "",
    author: "",
    style: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const adjustedFormData = {
      Año: formData.year,
      Título: formData.title,
      Autora: formData.author,
      Tipo: formData.style,
      Puntuación: formData.rating,
    };
    try {
      //const response = await fetch("/api/books", {
      //const response = await fetch("http://localhost:3003/api/books", {
      const response = await fetch(
        "https://read-log-back-production.up.railway.app/api/books",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(adjustedFormData),
        }
      );

      if (response.ok) {
        toast({
          title: "Book added successfully! :)",
        })
        setFormData({
          year: "",
          title: "",
          author: "",
          style: "",
          rating: "",
        });
        setAddBook(false);
      } else {
        toast({
          variant: "destructive",
          title: "Failed to add book. Try again :(",
        })
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the book.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
       <Sheet>
        <SheetTrigger className="bg-black-500 text-white px-4 py-2 rounded-lg">
          + Add Book
        </SheetTrigger>
        <SheetContent className="p-4 md:p-6 flex flex-col h-[100vh]">
          <SheetHeader>
            <SheetTitle className="text-xl font-bold mb-10 mt-14">
              Which book would you like to add?
            </SheetTitle>
            <SheetDescription className="flex flex-1">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full h-full gap-4"
              >
                <label className="flex flex-col">
                  <span className="font-semibold">Reading Year</span>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="bg-gray-100 border rounded-lg p-2 mt-1"
                  >
                    <option value="">Select a year</option>
                    {[...Array(10)].map((_, i) => {
                      const year = new Date().getFullYear() - i;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </label>

                <label className="flex flex-col">
                  <span className="font-semibold">Title</span>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="bg-gray-100 border rounded-lg p-2 mt-1"
                    placeholder="Title"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="font-semibold">Author</span>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className="bg-gray-100 border rounded-lg p-2 mt-1"
                    placeholder="Author"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="font-semibold">Style</span>
                  <input
                    type="text"
                    name="style"
                    value={formData.style}
                    onChange={handleChange}
                    className="bg-gray-100 border rounded-lg p-2 mt-1"
                    placeholder="Style"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="font-semibold">Rating</span>
                  <select
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    className="bg-gray-100 border rounded-lg p-2 mt-1"
                  >
                    <option value="">Select a rating</option>
                    {[1, 2, 3, 4, 5].map((rate) => (
                      <option key={rate} value={rate}>
                        {rate}
                      </option>
                    ))}
                  </select>
                </label>

                <button
                  type="submit"
                  className="bg-transparent border-none p-0 focus:outline-none mt-4 flex justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="green"
                      d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0z"
                    />
                  </svg>
                </button>
              </form>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <Toaster />
    </div>
  );
};

export default CreateForm;
