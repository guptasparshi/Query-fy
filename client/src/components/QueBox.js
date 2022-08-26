import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function QueBox(props) {

  // const [text, setText] = useState("");
  const [selectQue, setSelectQue] = useState("Enter your Question here:");

  const queArray = [{"id": "1q", "que":"How many emloyees are there in total?"}, 
                    {"id": "2q", "que":"How many emloyees are from Pune?"}, 
                    {"id": "3q", "que":"How many departments are there in total?"}, 
                    {"id": "4q", "que":"How many employees are from IT Dept.?"}];
  

  const QueText = (text) => {
    setSelectQue(text);
    // console.log(text);
  }
  
  
  return (
    <div>
    <div className="input-group mb-3">
        <button className="btn btn-outline-secondary" type="button" data-bs-toggle="modal" aria-expanded="true" data-bs-target="#staticBackdrop">Sample Questions</button>
          
          <div className="modal fade" id="staticBackdrop" data-bs-dismiss="modal" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content" key={queArray.id}>
                <div className="modal-header" >
                  <h5 className="modal-title" id="staticBackdropLabel">Select a sample Question from below</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  {
                    queArray.map((q) =>(
                      <>
                        <p type="button"   id={q.id} onClick={() => QueText(q.que)}> {q.que} </p> 
                        
                      </>
                    ))
                  }
                
                
                </div>
              </div>
            </div>
          </div>
        <input id="inputQue" type="text" className="form-control" onChange={(e) => setSelectQue(e.target.value)} value={selectQue} />
      <button type="button" className="btn btn-default">Submit</button> 
        
    </div>
    </div>
  )
}

QueBox.propTypes = {place: PropTypes.string}
