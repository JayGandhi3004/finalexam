import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteproduct, getproduct, postproduct, updateproduct } from '../product/api/api'

const Product = () => {

  const [adddata, setadddata] = useState({})
  const [final, setfinal] = useState({})
  const dispatch = useDispatch()
  const data = useSelector((state) => state.product.data)

  useEffect(() => {
    dispatch(getproduct())
  }, [])

  const changedata = (e) => {
    setadddata({ ...adddata, [e.target.name]: e.target.value })
  }

  const submitdata = () => {
    dispatch(postproduct(adddata))
  }

  const deletedata = (id) => {
    dispatch(deleteproduct(id))
    console.log(id);
  }

  const editdata = (val) => {
    setfinal(val)
  }

  const editchange = (e) => {
    setfinal({ ...final, [e.target.name]: e.target.value })
  }

  const update = () => {
    dispatch(updateproduct(final))
  }


  return (
    <div className='container'>
      <div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label ">Product Name:</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="productname" name='productname' onChange={changedata} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label ">Description:</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder='desc' name='desc' onChange={changedata} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label ">Price:</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder='price' name='price' onChange={changedata} />
        </div>

        <button onClick={submitdata} type="button" class="btn btn-outline-success btn-sm">Success</button>
      </div>


      <table class="table">
        <thead>
          <tr>
            <th scope="col">Productname</th>
            <th scope="col">Desc</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{val.productname}</td>
                  <td>{val.desc}</td>
                  <td>{val.price}</td>
                  <td>
                    <button className='btn btn-outline-danger me-2' onClick={() => deletedata(val.id)}>Delete</button>
                    <button className='btn btn-outline-success' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => editdata(val)}>Update</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Update Data</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label ">Product Name:</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="productname" value={final.productname} name='productname' onChange={editchange} />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label ">Description:</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder='desc' name='desc' value={final.desc} onChange={editchange} />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label ">Price:</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder='price' name='price' value={final.price} onChange={editchange} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" data-bs-dismiss="modal" className="btn btn-outline-secondary ">Cancle</button>
              <button onClick={update} type="button" data-bs-dismiss="modal" className="btn btn-outline-success">Update</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Product
