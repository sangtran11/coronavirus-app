import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Country from "./components/Country/Country";

function App() {
  // const [covidStats, setCovidStats] = useState(
  //   JSON.parse(JSON.stringify(covidStatsJSON))
  // );
  // const [countrySelected, setCountrySelected] = useState("");
  // const [region, setRegion] = useState();
  // const [detailInfo, setDetailInfo] = useState();

  // useEffect(() => {
  //   // index 0: country name [string]
  //   // index 1: region list [object]
  //   if (countrySelected) {
  //     const foundCountry = Object.entries(covidStats).find(
  //       (item) => item[0] === countrySelected
  //     );
  //     const regionItem = foundCountry && foundCountry[1];
  //     // Only has one "All" region. Binding data to display on UI
  //     if (regionItem && Object.keys(regionItem).length === 1) {
  //       const detailInfo = regionItem["All"];
  //       setDetailInfo(detailInfo);
  //       setRegion(null);
  //     } else {
  //       // Set data for a region select form
  //       setRegion(regionItem);
  //       setDetailInfo(null);
  //     }
  //   } else {
  //     // reset info and region data when a country is unselected
  //     setDetailInfo(null);
  //     setRegion(null);
  //   }
  // }, [countrySelected]);

  // const handleRegionSelected = (data) => {
  //   setDetailInfo(data);
  // };

  return (
    <>
      <Header />
      <div className="App">
        <Country />
      </div>
      <Footer />
    </>
  );
}

export default App;
