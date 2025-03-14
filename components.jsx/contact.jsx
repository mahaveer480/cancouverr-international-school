import React, { forwardRef } from "react";

 const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="container-fluid d-flex align-items-center justify-content-center" 
      style={{ background: '#88AFB9', height: '120vh' }}>
      
      <div className="row w-75 p-4 d-flex justify-content-between">
        {/* Contact Information */}
        <div className="col-md-5 text-white p-1" style={{ borderRadius: '10px' }}>
          <h2 className="fw-bold">Contact us</h2>
          <p>Register for daily updates</p>
          <p><i className="fas fa-envelope"></i> hello@relume.io</p>
          <p><i className="fas fa-phone"></i> +1 (555) 000-0000</p>
          <p><i className="fas fa-map-marker-alt"></i> 123 Sample St, Sydney NSW 2000 AU</p>
        </div>
        
        {/* Contact Form */}
        <div className="col-md-6 p-4 rounded" style={{ borderRadius: '10px' }}>
          <form>
            <div className="mb-3">
              <label className="form-label fas" style={{color:"white"}}>Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{color:"white"}}>Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{color:"white"}}>Message</label>
              <textarea className="form-control" rows="4" placeholder="Type your message..."></textarea>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="termsCheck" />
              <label className="form-check-label c-white" style={{color:"white"}} htmlFor="termsCheck">
                I accept the <a style={{color:"white"}} href="#">Terms</a>
              </label>
            </div>
            <button type="submit" className="btn bg-white">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
});


export default Contact