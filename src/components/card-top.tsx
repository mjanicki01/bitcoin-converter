// top contains currency symbol & BC -> Currency value display

import { useEffect, useState } from "react";
import { mapProperties } from "../helpers";


type CardTopProps = {
    currencyData: any;
}

const CardTop = ({ currencyData }: CardTopProps) => {

    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState(true);

    const firstLoad = async () => {
      const resp = await mapProperties();
      setData(JSON.stringify(resp));
      localStorage.setItem('Data', JSON.stringify(data));
      setLoading(false);
    };
  
    firstLoad();
  
    setInterval(async () => {
      const resp = await mapProperties();
      setData(JSON.stringify(resp));
    }, 10000)
  
    useEffect(() => {
      localStorage.setItem('Data', JSON.stringify(data));
    }, [data]);


    return (
    <div className="card-top">
        {data}
    </div>
    )
}

export default CardTop
