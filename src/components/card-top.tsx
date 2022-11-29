// top contains currency symbol & BC -> Currency value display

import { useEffect, useState } from "react";
import { Currencies, getTempData, mapProperties } from "../helpers";


type CardTopProps = {
    currency: Currencies;
}

const CardTop = ({ currency }: CardTopProps) => {

    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState(true);

    const firstLoad = async () => {

    //   const resp = await mapProperties();
    //   setData(JSON.stringify(resp));
    //   localStorage.setItem('Data', JSON.stringify(data));

      const resp = await getTempData(currency, 1);
      setData(JSON.stringify(resp));
      setLoading(false);
    };
  
    firstLoad();
  
    setInterval(async () => {

    //   const resp = await mapProperties();
    //   setData(JSON.stringify(resp));

      const resp = await getTempData(currency, 1);
      setData(JSON.stringify(resp));
    }, 10000)
  
    // useEffect(() => {
    //   localStorage.setItem('Data', JSON.stringify(data));
    // }, [data]);


    return (
    <div className="card-top">
        <span>{data}</span>
    </div>
    )
}

export default CardTop
