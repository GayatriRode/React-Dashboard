import React from 'react';

const Students = () => {
  return (
    <div className="container-fluid">
      <div className='studentList row'>
      <h6>Students List</h6>
      <div className='col-lg-12 col-md-12 col-sm-12'>
      <table className='table table-responsive'>
        <thead>
          <tr>
            <th scope="col">Img</th>
            <th scope="col">Student Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Branch</th>
            <th scope="col">Date Of Admission</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/user8.jpg" alt='Student' height={40} width={40}/></td>
            <td>Astha Shah</td>
            <td>9898989898</td>
            <td>Pune</td>
            <td>Mechanical</td>
            <td>25-01-24</td>
          </tr>
          <tr>
            <td><img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/user2.jpg" alt='Student' height={40} width={40}/></td>
            <td>Avinash Bore</td>
            <td>9898989898</td>
            <td>Pune</td>
            <td>Science</td>
            <td>25-01-24</td>
          </tr>
          <tr>
            <td><img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/user3.jpg" alt='Student' height={40} width={40}/></td>
            <td>Sonali Joshi</td>
            <td>9898989898</td>
            <td>Pune</td>
            <td>MBA</td>
            <td>25-01-24</td>
          </tr>
          <tr>
            <td><img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/user4.jpg" alt='Student' height={40} width={40}/></td>
            <td>Madhura Kanetkar</td>
            <td>9898989898</td>
            <td>Pune</td>
            <td>MCA</td>
            <td>25-01-24</td>
          </tr>
          <tr>
            <td><img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/user5.jpg" alt='Student' height={40} width={40}/></td>
            <td>Sharada Kelkar</td>
            <td>9898989898</td>
            <td>Pune</td>
            <td>Electrical</td>
            <td>25-01-24</td>
          </tr>
          <tr>
            <td><img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/user6.jpg" alt='Student' height={40} width={40}/></td>
            <td>Himanshu Kale</td>
            <td>9898989898</td>
            <td>Pune</td>
            <td>Civil</td>
            <td>25-01-24</td>
          </tr>
          <tr>
            <td><img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/user7.jpg" alt='Student' height={40} width={40}/></td>
            <td>Radhika More</td>
            <td>9898989898</td>
            <td>Pune</td>
            <td>Computer</td>
            <td>25-01-24</td>
          </tr>
          <tr>
            <td><img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/user8.jpg" alt='Student' height={40} width={40}/></td>
            <td>Apeksha Jindal</td>
            <td>9898989898</td>
            <td>Pune</td>
            <td>MCA</td>
            <td>25-01-24</td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default Students;
