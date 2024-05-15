import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../Layout/Layout";
import "./App.css";

const HomePage = lazy(() => import("../../page/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../page/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../page/MovieDetailPage/MovieDetailPage"));
const NotFoundPage = lazy(() => import("../../page/NotFoundPage/NotFoundPage") );
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));

export default function App() {
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}