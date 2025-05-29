import Page from "./Page";
import { WeatherProvider } from "./provider";
import FavoriteProvider from "./provider/FavoriteProvider";
import LocationProvider from "./provider/LocationProvider";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <Page />
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
