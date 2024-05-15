export default function SearchBar({ onSubmit }) {
    const handleSubmite = (event) => {
      event.preventDefault();
      const form = event.target;
  
      if (form.elements.query.value.trim() === "") {
        alert("Please, enter text to search");
      }
      onSubmit(form.elements.query.value.trim());
      form.reset();
    };
  
    return (
      <header>
        <form onSubmit={handleSubmite}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
          <button type="submit">
            Search
          </button>
        </form>
      </header>
    );
}