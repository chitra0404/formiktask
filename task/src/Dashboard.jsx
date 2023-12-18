import React from 'react'
import { BarChart } from './BarChart';

 import { PieChart } from '../../PieChart';


function Dashboard() {
    return (
        <div className="container-fluid p-3 bg-success p-2 text-dark bg-opacity-25">
            <div className="d-sm-flex align-items-center justify-content-between mb-4 bg-success p-2 text-dark bg-opacity-25">
            <h1 className="h3 mb-0 text-center" >FORMIK REACT lIBRARAY ADMIN DASHBOARD</h1>
            </div>
            <div className="row">
            
                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4 bg-success p-2 text-dark bg-opacity-25">
                        <div className="card-header py-3 bg-success p-2 text-dark bg-opacity-25">
                            <h6 className="m-0 font-weight-bold text-primary bg-success p-2 text-dark bg-opacity-25">Visitor & Borrower</h6>
                        </div>
                        <div className="card-body bg-success p-2 text-dark bg-opacity-25">
                            <div className="chart-bar bg-success p-2 text-dark bg-opacity-25">
                                <BarChart />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-xl-4 col-lg-7">
                    <div className="card shadow mb-4 bg-success p-2 text-dark bg-opacity-25">
                        <div className="card-header py-3 bg-success p-2 text-dark bg-opacity-25">
                            <h6 className="m-0 font-weight-bold text-primary bg-success p-2 text-dark bg-opacity-25">Male & Female</h6>
                        </div>
                        <div className="card-body bg-success p-2 text-dark bg-opacity-25">
                             <div className="chart-bar bg-success p-2 text-dark bg-opacity-25">
                                <PieChart />
                            </div> 

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Dashboard