import React from 'react';

const Professors = () => {
  return (
    <div className="prof-list row">
        <h6>Professors List</h6>
        <div className='col-lg-12 col-md-12 col-sm-12'>
        <table className='table table-responsive'>
        <thead>
          <tr>
            <th scope="col">Img</th>
            <th scope="col">Professors Name</th>
            <th scope="col">Department</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Joining Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/user1.jpg" alt="Professor" height={40} width={40}/></td>
            <td>Radha Kulkarni</td>
            <td>Computer</td>
            <td>Female</td>
            <td>radha@gmail.com</td>
            <td>9685745689</td>
            <td>21-01-2022</td>
            <td><i className='fa fa-edit'></i></td>
          </tr>
          <tr>
            <td><img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/user2.jpg" alt="Professor" height={40} width={40}/></td>
            <td>Shyam Raut</td>
            <td>Mechanical</td>
            <td>Male</td>
            <td>shyam@gmail.com</td>
            <td>9685745689</td>
            <td>21-01-2022</td>
          </tr>
          <tr>
            <td><img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/user3.jpg" alt="Professor" height={40} width={40}/></td>
            <td>Monika Dhome</td>
            <td>Civil</td>
            <td>Female</td>
            <td>monika@gmail.com</td>
            <td>9685745689</td>
            <td>21-01-2021</td>
          </tr>
          <tr>
            <td><img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/user4.jpg" alt="Professor" height={40} width={40}/></td>
            <td>Jay Soni</td>
            <td>Mathematics</td>
            <td>Male</td>
            <td>jay@gmail.com</td>
            <td>9685745689</td>
            <td>21-05-2021</td>
          </tr>
          <tr>
            <td><img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/user5.jpg" alt="Professor" height={40} width={40}/></td>
            <td>Smita Parikh</td>
            <td>Biology</td>
            <td>Female</td>
            <td>smita@gmail.com</td>
            <td>9685745689</td>
            <td>10-05-2021</td>
          </tr>
          <tr>
            <td><img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/user6.jpg" alt="Professor" height={40} width={40}/></td>
            <td>Pankaj Sinha</td>
            <td>Chemistry</td>
            <td>Male</td>
            <td>pankaj@gmail.com</td>
            <td>9685745689</td>
            <td>10-05-2020</td>
          </tr>
          <tr>
            <td><img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/user7.jpg" alt="Professor" height={40} width={40}/></td>
            <td>Pooja Patel</td>
            <td>Sociology</td>
            <td>Female</td>
            <td>pooja@gmail.com</td>
            <td>9685745689</td>
            <td>15-05-2020</td>
          </tr>
          <tr>
            <td><img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/user8.jpg" alt="Professor" height={40} width={40}/></td>
            <td>Harshita Jogale</td>
            <td>Physics</td>
            <td>Female</td>
            <td>harshita@gmail.com</td>
            <td>9685745689</td>
            <td>25-05-2020</td>
          </tr>
          <tr>
            <td><img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/user9.jpg" alt="Professor" height={40} width={40}/></td>
            <td>Poonam Gogawale</td>
            <td>Geography</td>
            <td>Female</td>
            <td>poonam@gmail.com</td>
            <td>9685745689</td>
            <td>25-10-2020</td>
          </tr>
          <tr>
            <td><img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/user/user10.jpg" alt="Professor" height={40} width={40}/></td>
            <td>Amar Singh</td>
            <td>History</td>
            <td>Male</td>
            <td>amar@gmail.com</td>
            <td>9685745689</td>
            <td>25-10-2022</td>
          </tr>
        </tbody>
        </table>
        </div>
        
      </div>
  );
}

export default Professors;
