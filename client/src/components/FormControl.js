import React, { useState } from "react";
// import { CsvToHtmlTable } from "react-csv-to-table";

export default function FormControl({table}) {

    const [csvFile, setCsvFile] = useState();
    const [csvData, setCsvData] = useState();
    const [valid, setValid] = useState(true);

    const handleInputFile = (e) => {
        setCsvFile(e.target.files[0]);
        const fileName = e.target.files[0].name;
        const fileExt = fileName.split(".")[1];
        //console.log(fileName + "  " + fileExt);
        if (!["csv", "xls", "xlsx"].includes(fileExt)) {
          setValid(true);
        } else {
          setValid(false);
        }
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        if (csvFile) {
          convertCSVtoText();
        }
      };
    //   const handleReset = () => {
    //     setCsvFile(null);
    //     setCsvData();
    //     setValid(true);
    //   };
      const convertCSVtoText = () => {
        const clonedCsvFile = csvFile;
    
        const reader = new FileReader();
        reader.onload = function (e) {
          const text = e.target.result;
          console.log(text);
          setCsvData(text);
          table(text);
        };
        reader.readAsText(clonedCsvFile);
      };

  return (
    <div>
        <div className="text-center row input-group mb-3">
          {/*COL 7*/}
            <form className="">
                <div className="input-group mb-3">
                    <input className="form-control" type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" onChange={handleInputFile}/>
                    <button type="button" className="btn btn-default"  disabled={valid} onClick={handleSubmit} id="convert" >Upload</button>
                </div>
            </form>
            {/* <CsvToHtmlTable data={csvData} csvDelimiter="," hasHeader="true" tableClassName="table table-hover table-hovered table-bordered"/> */}
        </div>
    
    </div>

  )
}
