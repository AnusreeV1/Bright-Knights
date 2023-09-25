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


        {/* <div>
          
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
        </div> */}



      </div>

      <div>
      <div class="relative font-inter antialiased">

{/* <main class="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div class="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">

            <div class="w-full max-w-3xl mx-auto">
            
               
                <div class="-my-6">

                    
                    <div class="relative pl-8 sm:pl-32 py-6 group">
                       
                        <div class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The origin</div>
                       <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2020</time>
                            <div class="text-xl font-bold text-slate-900">Acme was founded in Milan, Italy</div>
                        </div>
                        
                        <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                    </div>
                    
                    
                    <div class="relative pl-8 sm:pl-32 py-6 group">
                       
                        <div class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The milestone</div>
                        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2021</time>
                            <div class="text-xl font-bold text-slate-900">Reached 5K customers</div>
                        </div>
                        
                        <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                    </div>
                    
                    
                    <div class="relative pl-8 sm:pl-32 py-6 group">
                       
                        <div class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The acquisitions</div>
                        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2022</time>
                            <div class="text-xl font-bold text-slate-900">Acquired various companies, inluding Technology Inc.</div>
                        </div>
                        
                        <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                    </div>
                    
                    
                    <div class="relative pl-8 sm:pl-32 py-6 group">
                       
                        <div class="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The IPO</div>
                        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2023</time>
                            <div class="text-xl font-bold text-slate-900">Acme went public at the New York Stock Exchange</div>
                        </div>
                        
                        <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                    </div>

                </div>
               
                
            </div>

            <div class="w-full max-w-3xl mx-auto">
            
               
                <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

                    
                    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        
                        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                            </svg>
                        </div>
                        
                        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                            <div class="flex items-center justify-between space-x-2 mb-1">
                                <div class="font-bold text-slate-900">Order Placed</div>
                                <time class="font-caveat font-medium text-indigo-500">08/06/2023</time>
                            </div>
                            <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
                        </div>
                    </div>
                    
                    
                    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        
                        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                            </svg>
                        </div>
                        
                        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                            <div class="flex items-center justify-between space-x-2 mb-1">
                                <div class="font-bold text-slate-900">Order Shipped</div>
                                <time class="font-caveat font-medium text-indigo-500">09/06/2023</time>
                            </div>
                            <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
                        </div>
                    </div>
                    
                    
                    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        
                        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                            </svg>
                        </div>
                        
                        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                            <div class="flex items-center justify-between space-x-2 mb-1">
                                <div class="font-bold text-slate-900">In Transit</div>
                                <time class="font-caveat font-medium text-indigo-500">10/06/2023</time>
                            </div>
                            <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
                        </div>
                    </div>
                    
                    
                    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        
                        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                            </svg>
                        </div>
                        
                        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                            <div class="flex items-center justify-between space-x-2 mb-1">
                                <div class="font-bold text-slate-900">Out of Delivery</div>
                                <time class="font-caveat font-medium text-indigo-500">12/06/2023</time>
                            </div>
                            <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
                        </div>
                    </div>
                    
                    
                    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        
                        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                                <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
                            </svg>
                        </div>
                        
                        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                            <div class="flex items-center justify-between space-x-2 mb-1">
                                <div class="font-bold text-slate-900">Delivered</div>
                                <time class="font-caveat font-medium text-amber-500">Exp. 12/08/2023</time>
                            </div>
                            <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
                        </div>
                    </div>

                </div>
                

            </div>

            <div class="w-full max-w-3xl mx-auto">

              
                <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

                    
                    <div class="relative">
                        <div class="md:flex items-center md:space-x-4 mb-3">
                            <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                
                                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <svg class="fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                        <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                                    </svg>
                                </div>
                                
                                <time class="font-caveat font-medium text-xl text-indigo-500 md:w-28">Apr 7, 2024</time>
                            </div>
                            
                            <div class="text-slate-500 ml-14"><span class="text-slate-900 font-bold">Mark Mikrol</span> opened the request</div>
                        </div>
                        
                        <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.</div>
                    </div>
                    
                    
                    <div class="relative">
                        <div class="md:flex items-center md:space-x-4 mb-3">
                            <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                
                                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                        <path class="fill-slate-300" d="M14.853 6.861C14.124 10.348 10.66 13 6.5 13c-.102 0-.201-.016-.302-.019C7.233 13.618 8.557 14 10 14c.51 0 1.003-.053 1.476-.143L14.2 15.9a.499.499 0 0 0 .8-.4v-3.515c.631-.712 1-1.566 1-2.485 0-.987-.429-1.897-1.147-2.639Z" />
                                        <path class="fill-slate-500" d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V11.5a.5.5 0 0 0 .8.4l1.915-1.436c.845.34 1.787.536 2.785.536 3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0Z" />
                                    </svg>
                                </div>
                                
                                <time class="font-caveat font-medium text-xl text-indigo-500 md:w-28">Apr 7, 2024</time>
                            </div>
                            
                            <div class="text-slate-500 ml-14"><span class="text-slate-900 font-bold">John Mirkovic</span> commented the request</div>
                        </div>
                        
                        <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</div>
                    </div>
                    
                    
                    <div class="relative">
                        <div class="md:flex items-center md:space-x-4 mb-3">
                            <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                
                                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                        <path class="fill-slate-300" d="M14.853 6.861C14.124 10.348 10.66 13 6.5 13c-.102 0-.201-.016-.302-.019C7.233 13.618 8.557 14 10 14c.51 0 1.003-.053 1.476-.143L14.2 15.9a.499.499 0 0 0 .8-.4v-3.515c.631-.712 1-1.566 1-2.485 0-.987-.429-1.897-1.147-2.639Z" />
                                        <path class="fill-slate-500" d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V11.5a.5.5 0 0 0 .8.4l1.915-1.436c.845.34 1.787.536 2.785.536 3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0Z" />
                                    </svg>
                                </div>
                                
                                <time class="font-caveat font-medium text-xl text-indigo-500 md:w-28">Apr 8, 2024</time>
                            </div>
                            
                            <div class="text-slate-500 ml-14"><span class="text-slate-900 font-bold">Vlad Patterson</span> commented the request</div>
                        </div>
                        
                        <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">Letraset sheets containing passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Ipsum.</div>
                    </div>
                    
                    
                    <div class="relative">
                        <div class="md:flex items-center md:space-x-4 mb-3">
                            <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                
                                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                        <path class="fill-slate-300" d="M14.853 6.861C14.124 10.348 10.66 13 6.5 13c-.102 0-.201-.016-.302-.019C7.233 13.618 8.557 14 10 14c.51 0 1.003-.053 1.476-.143L14.2 15.9a.499.499 0 0 0 .8-.4v-3.515c.631-.712 1-1.566 1-2.485 0-.987-.429-1.897-1.147-2.639Z" />
                                        <path class="fill-slate-500" d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V11.5a.5.5 0 0 0 .8.4l1.915-1.436c.845.34 1.787.536 2.785.536 3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0Z" />
                                    </svg>
                                </div>
                                
                                <time class="font-caveat font-medium text-xl text-indigo-500 md:w-28">Apr 8, 2024</time>
                            </div>
                            
                            <div class="text-slate-500 ml-14"><span class="text-slate-900 font-bold">Mila Capentino</span> commented the request</div>
                        </div>
                        
                        <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                    </div>
                    
                    
                    <div class="relative">
                        <div class="md:flex items-center md:space-x-4 mb-3">
                            <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                
                                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <svg class="fill-red-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                        <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                                    </svg>
                                </div>
                                
                                <time class="font-caveat font-medium text-xl text-indigo-500 md:w-28">Apr 9, 2024</time>
                            </div>
                            
                            <div class="text-slate-500 ml-14"><span class="text-slate-900 font-bold">Mark Mikrol</span> closed the request</div>
                        </div>
                        
                        <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">If you are going to use a passage of Lorem Ipsum!</div>
                    </div>

                </div>
               

            </div>

        </div>
    </div>
</main>
 */}




</div>
      </div>

      {/* New Timeline open */}

      <script src="https://kit.fontawesome.com/fc596df623.js" crossorigin="anonymous"></script>


<div class="timeline">

	
	<div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
		<div class="timeline__event__icon ">
			{/* <!-- <i class="lni-sport"></i>--> */}
            <div id="loader" class="ball">
            <div class="wavep delay">
                <div class="wavep">
                </div>
            </div>
            </div>

		</div>
		<div class="timeline__event__date">
			Module 1
		</div>
		<div class="timeline__event__content ">
			<div class="timeline__event__title">
                Introduction and Basics
			</div>
			<div class="timeline__event__description">
                <br></br>
				 <p><b>Session 1:</b> Introduction to Chess - Overview, history, and objective.</p>
                 <br></br>
                 <p><b>Session 2:</b> The Chessboard - Naming squares and setting up the board.</p>
                 <br></br>
                 <p><b>Session 3:</b> Movement of Major Pieces - Rook, Bishop, Queen.</p>
                 <br></br>
                 <p><b>Session 4:</b> Movement of Minor and Special Pieces - Knight, King, Pawn.</p>
                 <br></br>
                 <p><b>Session 5:</b> Test Review - 1 - Recap of movements and basic rules.</p>
			</div>
		</div>
	</div>

	

	<div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
		<div class="timeline__event__icon">
			{/* <!-- <i class="lni-sport"></i>--> */}
            <div id="loader" class="ball">
            <div class="waveb delay">
                <div class="waveb">
                </div>
            </div>
            </div>

		</div>
		<div class="timeline__event__date">
			Module 2
		</div>
		<div class="timeline__event__content">
			<div class="timeline__event__title">
            Attack and Defense
            
			</div>
			<div class="timeline__event__description">
                <br></br>
                <p> <b>Session 6:</b> Basic Attacks - Using Rook, Bishop, Queen.</p>
                <br></br>
                <p> <b>Session 7:</b> Advanced Attacks - Using Knight, Pawn, targeting the King.</p>
                <br></br>
                <p> <b>Session 8:</b> Defensive Techniques - Moving pieces away, supporting them.</p>
                <br></br>
                <p> <b>Session 9:</b> Advanced Defense - Interposing and capturing.</p>
                <br></br>
                <p> <b>Session 10:</b> Test Review - 2 - Assessment of offense and defense.</p>
</div>
		</div>
	</div>

	

	<div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
		<div class="timeline__event__icon">
			{/* <!-- <i class="lni-sport"></i>--> */}
            <div id="loader" class="ball">
            <div class="waveg delay">
                <div class="waveg">
                </div>
            </div>
            </div>

		</div>
		<div class="timeline__event__date">
			Module 3
		</div>
		<div class="timeline__event__content">
			<div class="timeline__event__title">
            Special Moves & Mate Concepts
        <br></br>
			</div>
			<div class="timeline__event__description">
                <br></br>
                <p> <b>Session 11:</b> Special Moves - Castling, En passant.</p>
                <br></br>
                <p>  <b>Session 12:</b> Check, Checkmate, Stalemate - Understanding differences.</p>
                <br></br>
                <p> <b>Session 13:</b> Mate in One - Using Queen, Rook, Minor Pieces, Pawn.</p>
                <br></br>
                <p> <b>Session 14:</b> Advanced Mates - Double Rook, Queen-Rook checkmates.</p>
                <br></br>
                <p> <b>Session 15:</b> Test Review - 3 - Concepts of mating, special moves.</p>

                </div>

		</div>
	</div>

	

	<div class="timeline__event animated fadeInUp timeline__event--type1">
		<div class="timeline__event__icon">
			{/* <!-- <i class="lni-sport"></i>--> */}
            <div id="loader" class="ball">
            <div class="wavep delay">
                <div class="wavep">
                </div>
            </div>
            </div>

		</div>
		<div class="timeline__event__date">
        Module 4
		</div>
		<div class="timeline__event__content">
			<div class="timeline__event__title">
            Tactics and Strategy
            
			</div>
			<div class="timeline__event__description">
                <br></br>
                <p><b>Session 16:</b> Tactical Play - Pin, Double Attack, Gaining by Exchange.</p>
                <br></br>
                <p> <b>Session 17:</b> Advanced Tactics - Discovered Attack, Check, Double Check.</p>
                <br></br>
                <p><b>Session 18:</b> Pawn Strategies - Promotion, Drawing techniques.</p>
                <br></br>
                <p><b>Session 19:</b> Introduction to Openings - Basic principles.</p>
                <br></br>
                <p><b>Session 20:</b> Test Review - 4 - Assessment on tactics, strategies.</p>


                </div>
		</div>
	</div>

	
	<div class="timeline__event  animated fadeInUp delay-3s timeline__event--type2">
		<div class="timeline__event__icon ">
			{/* <!-- <i class="lni-sport"></i>--> */}
            <div id="loader" class="ball">
            <div class="waveb delay">
                <div class="waveb">
                </div>
            </div>
            </div>

		</div>
		<div class="timeline__event__date">
			Module 5
		</div>
		<div class="timeline__event__content ">
			<div class="timeline__event__title">
            Application and Practice
            
			</div>
			<div class="timeline__event__description">
                <br></br>
                <p><b>Session 21:</b> Simul - Opening Principle Revision - Practical application.</p>
                <br></br>
                <p> <b>Session 22:</b> Creating a Mating Threat - Recognizing opportunities.</p>
                <br></br>
                <p> <b>Session 23:</b> Notation - Basics of chess notation.</p>
                <br></br>
                <p> <b>Session 24:</b> Review of Special Moves & Rules.</p>
                <br></br>
                <p> <b>Session 25:</b> Test Review - 5 - Comprehensive assessment</p>


                </div>
		</div>
	</div>

	

	<div class="timeline__event animated fadeInUp delay-2s timeline__event--type3">
		<div class="timeline__event__icon">
			{/* <!-- <i class="lni-sport"></i>--> */}
            <div id="loader" class="ball">
            <div class="waveg delay">
                <div class="waveg">
                </div>
            </div>
            </div>

		</div>
		<div class="timeline__event__date">
			Module 6
		</div>
		<div class="timeline__event__content">
			<div class="timeline__event__title">
            Advanced Practice & Tournaments
            
			</div>
			<div class="timeline__event__description">
                <br></br>
                <p> <b>Session 26: </b>In-Class Tournament - Friendly competition.</p>
                <br></br>
                <p> <b>Session 27:</b> Game Analysis - Feedback from tournament games.</p>
                <br></br>
                <p> <b>Session 28:</b> One-on-One Session with Educator - Personalized feedback.</p>
                <br></br>
                <p> <b>Session 29:</b> Strategic Play - Planning multiple moves ahead.</p>
                <br></br>
                <p> <b>Session 30:</b> Final Review & Feedback - Course recap, feedback.</p>


                </div>
		</div>
	</div>


</div>

      {/* New Timeline close */}

      

      </>

    )
}

export default InternalPage



