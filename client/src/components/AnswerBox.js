import React from 'react'
import QueBox from './QueBox'

export default function AnswerBox() {
  return (
    <div>
    <div className="container">
      <div className="row">
          <div className="col-6">
            <QueBox/>
          </div>
          <div className="col-6">
            <QueBox />
          </div>
      </div>
    </div>
    </div>
  )
}
