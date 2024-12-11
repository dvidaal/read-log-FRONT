import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useToast } from "@/hooks/use-toast";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useBook } from "@/hooks/useBook/useBook";
import Button from "../Button/Button";

const EditBookDrawer = ({ book, onBookEdited }) => {
  const { editBook } = useBook();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    year: "",
    title: "",
    author: "",
    style: "",
    rating: "",
  });

  useEffect(() => {
    if (book) {
      setFormData({
        year: book.Año || "",
        title: book.Título || "",
        author: book.Autora || "",
        style: book.Tipo || "",
        rating: book.Puntuación || "",
      });
    }
  }, [book]);

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
      await editBook(book.id, adjustedFormData);
      toast({
        variant: "success",
        title: "Book updated successfully! :)",
      });

      if (onBookEdited) {
        onBookEdited();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to update book. Try again :(",
      });
      console.error("Error editing book:", error.message);
    }
  };

  return (
    <Drawer>
      <DrawerTrigger>
        <Button text={"Edit"} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Book</DrawerTitle>
          <DrawerDescription>
            Modify the details of your book below.
          </DrawerDescription>
        </DrawerHeader>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-lg gap-4 m-auto p-6 border rounded-lg"
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
              {[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((rate) => (
                <option key={rate} value={rate}>
                  {rate}
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4 w-40 self-center"
          >
            Update Book
          </button>
        </form>
      </DrawerContent>
    </Drawer>
  );
};

EditBookDrawer.propTypes = {
  onBookEdited: PropTypes.func,
  book: PropTypes.func,
};

export default EditBookDrawer;
