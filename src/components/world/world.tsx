import { LocationsContainer, WorldContainer } from "./world.styles"
import { useSelector } from 'react-redux';
import { RootState } from "../../store/store";
import { Location as LocationInterface } from "../../store/slices/location/locationSlice.interface";
import { Location } from './../location/location'
import { locationAdapter } from "../../interfaces/Location.interface";

export const World = () => {
    const { locations } = useSelector((state: RootState) => state.locations);

    return <WorldContainer>
        <LocationsContainer>
            {locations.map((location: LocationInterface) => <Location key={location.id} {...locationAdapter(location)} />)}
        </LocationsContainer>
    </WorldContainer>
}