// import logo from './logo.svg';
import Qlogo from './QueryFi.png';
import './App.css';
import Navbar from './components/Navbar';
import QueBox from './components/QueBox';
import FormControl from './components/FormControl';
import React, { useState } from "react";
import { CsvToHtmlTable } from "react-csv-to-table";
import AnswerBox from './components/AnswerBox';


function App() {
  const [text, setText] = useState();
  // console.log(text);
  
  return (
    <>
    <Navbar title=""/>
    
    <div className='center my-3'> <br/>
      <img src= {Qlogo} alt="" className="center" />    
    </div>
    
    <div className="container my-3">
      <div className="row">
          <div className="col-5">
            <FormControl table = {setText}/>
          </div>
          <div className="col-7">
            <QueBox />
          </div>
      </div>
    </div>

    <div className='container ' >
      <CsvToHtmlTable data={text} csvDelimiter="," hasHeader="true" tableClassName="table table-hover table-hovered table-bordered"/>
    </div>

    <div className='container'>
      <AnswerBox/>
    </div>

    </>
    
  );
}

export default App;
