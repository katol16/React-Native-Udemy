import { ADD_PLACE, SELECT_PLACE, DESELECT_PLACE, DELETE_PLACE} from '../actions/actionTypes';
import placeImage from "../../assets/zdj.png";

const initialState = {
    places: [],
    selectedPlace: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                // Zawsze zwracamy nowy stan w Redux, który zastąpi stary stan
                // żeby niczego nie stracić starego state, kopiujemy go za pomocą: ...state
                // To generalnei bierze nowy state i go wstawia, wiec nie stracimy starego state
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    image: {
                        uri: "https://cdn.pixabay.com/photo/2017/11/08/11/28/reine-2930101_960_720.jpg"
                    }
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key;
                }),
                selectedPlace: null
            };
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(place => {
                    return place.key === action.placeKey;
                })
            };
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            };
        default:
            return state;
    }
};

export default reducer;