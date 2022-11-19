import { fetchImages } from '../js/fetchImages';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let getEL = x => document.querySelector(x);


const input = getEL('.search-form-input');
const btnSearch = getEL('.search-form-button');
const btnLoadMore = getEL('.load-more')
const gallery = getEL('.gallery')
let gallerySimpleLightbox = new SimpleLightbox('.gallery a')

