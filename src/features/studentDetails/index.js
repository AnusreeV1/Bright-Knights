import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import '../../StudentDetails.css';

import { openModal } from "../../features/common/modalSlice"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'




function InternalPage(){

    // Edit comments open

    const deleteCurrentLead = (index) => {
      dispatch(openModal({title : "Edit Comments", bodyType : MODAL_BODY_TYPES.LEAD_ADD_NEW}))
    }

    const openClass = (index) => {
      dispatch(openModal({title : "Class History" , bodyType : MODAL_BODY_TYPES.CLASS}))
    }

    const openClassView = (index) => {
      dispatch(openModal({title : "Class History" , bodyType : MODAL_BODY_TYPES.CLASS_VIEW}))
    }

    // Edit comments close

    const dispatch = useDispatch()

    const editModuleComments = (moduleNo) => {
      deleteCurrentLead()
    }

    useEffect(() => {
        dispatch(setPageTitle({ title : "Student Details"}))
      }, [])
      
    return(

      <>

      <div>
      
        <header>

          <div class="container">

            <div class="profile">

              <div class="profile-image">

                <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt=""></img>

              </div>
                                  
              <div>

              <button className="btn btn-square btn-ghost" onClick={() => openClass()}><MaterialIcon icon="post_add" /></button>
              <button className="btn btn-square btn-ghost" onClick={() => openClassView()}><MaterialIcon icon="list_alt" /></button>
                  

              </div>

              <div class="profile-user-settings">

                <h1 class="profile-user-name">Student Name</h1>
              </div>

              <div class="profile-stats">

                <ul>
                  <li><span class="profile-stat-count">Parent Name - </span> pn</li>
                  <br></br>
                  <li><span class="profile-stat-count">Parent Contact number - </span>pcn</li>
                  <br></br>
                  <li><span class="profile-stat-count">Parent Mail - </span>pm</li>
                  <br></br>
                  <li><span class="profile-stat-count">Level - </span>l</li>
                  <br></br>
                  <li><span class="profile-stat-count">Joined on - </span>jo</li>
                </ul>

              </div>

              {/* <div class="profile-bio">

                <p><span class="profile-real-name">Joined On - </span>jo</p>

              </div> */}

            </div>
            

          </div>


        </header>


        <div>
          
            <div class="timeline">
              <div class="container-tl left">
                <div class="content">
                  <h2>Module 1</h2>
                  <br></br>
                  <ul>
                    <li>Section 1</li>
                    <li>Section 2</li>
                  </ul>
                  <br></br>
                  <h3>Comments <button className="btn btn-square btn-ghost" onClick={() => editModuleComments(1)}><MaterialIcon icon="edit" /></button></h3> 
                  
                 
                  <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
        
                </div>
              </div>
              <div class="container-tl right">
                <div class="content">
                  <h2>Module 1</h2>
                  <br></br>
                  <ul>
                    <li>Section 1</li>
                    <li>Section 2</li>
                  </ul>
                  <br></br>
                  <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                </div>
              </div>
              <div class="container-tl left">
                <div class="content">
                  <h2>Module 1</h2>
                  <br></br>
                  <ul>
                    <li>Section 1</li>
                    <li>Section 2</li>
                  </ul>
                  <br></br>
                  <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                </div>
              </div>
              <div class="container-tl right">
                <div class="content">
                  <h2>Module 1</h2>
                  <br></br>
                  <ul>
                    <li>Section 1</li>
                    <li>Section 2</li>
                  </ul>
                  <br></br>
                  <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                </div>
              </div>
              <div class="container-tl left">
                <div class="content">
                  <h2>Module 1</h2>
                  <br></br>
                  <ul>
                    <li>Section 1</li>
                    <li>Section 2</li>
                  </ul>
                  <br></br>
                  <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                </div>
              </div>
              <div class="container-tl right">
                <div class="content">
                  <h2>Module 1</h2>
                  <br></br>
                  <ul>
                    <li>Section 1</li>
                    <li>Section 2</li>
                  </ul>
                  <br></br>
                  <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                </div>
              </div>
            </div>
        </div>



      </div>

      {/* Modal open */}

      

      {/* Modal close */}

      

      </>

    )
}

export default InternalPage



