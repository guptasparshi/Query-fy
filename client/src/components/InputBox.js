import React from 'react'

export default function InputBox() {
  return (
    <div>
      <div className="input-group mb-3">
        <input type="file" className="form-control " id="inputFile" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
        <label className="input-group-text btn-default" htmlFor="inputFile">Upload</label>
      </div>
    </div>
  )
}
