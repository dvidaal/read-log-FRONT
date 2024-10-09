import { useState } from "react";

const CreateForm = () => {
  const [addBook, setAddBook] = useState(false);

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
    try {
      const response = await fetch("/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Book added successfully!");
        setFormData({
          year: "",
          title: "",
          author: "",
          style: "",
          rating: "",
        });
        setAddBook(false);
      } else {
        alert("Failed to add book.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the book.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={() => setAddBook(!addBook)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        {addBook ? "Hide Form" : "+ Add Book"}
      </button>

      {addBook && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-80">
          <label className="flex flex-col">
            Reading Year
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="bg-transparent border-2 text-black p-2 mt-1"
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
            Title
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="bg-transparent text-black border-2 p-2 mt-1"
              placeholder="Title"
            />
          </label>

          <label className="flex flex-col">
            Author
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="bg-transparent text-black border-2 p-2 mt-1"
              placeholder="Author"
            />
          </label>

          <label className="flex flex-col">
            Style
            <input
              type="text"
              name="style"
              value={formData.style}
              onChange={handleChange}
              className="bg-transparent text-black border-2 p-2 mt-1"
              placeholder="Style"
            />
          </label>

          <label className="flex flex-col">
            Rating
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="bg-transparent border-2 text-black p-2 mt-1"
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
      )}
    </div>
  );
};

export default CreateForm;
