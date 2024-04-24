import { Field, Form, Formik } from "formik";
import css from "../SearchBar/SearchBar.module.css";

export default function SearchForm({ onSearch }) {
  return (
    <header>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          onSearch(values.query);

          actions.resetForm();
        }}
      >
        <Form className={css.searchForm}>
          <Field
            className={css.searchFormImput}
            type="text"
            name="query"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
          <button className={css.Btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}
