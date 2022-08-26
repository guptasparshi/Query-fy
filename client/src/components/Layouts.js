import React from 'react'
import FormControl from './FormControl';
import InputBox from './InputBox';
import QueBox from './QueBox'
export default function Layouts() {
  return (
    <div className="container text-center">
    <div className="row">
        <div className="col-5">
          <FormControl/>
        </div>
        <div className="col-7">
            <QueBox />
        </div>
    </div>
    </div>

  )
}
