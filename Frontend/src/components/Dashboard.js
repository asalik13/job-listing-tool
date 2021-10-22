import './../styles/Dashboard.css';

import Header from './Header';
import DashboardNav from './DashboardNav';
import JobListings from './JobListings';
import Footer from './Footer';

const Dashboard = ({ user }) => {
    return (

        <div className='dashboard'>
            This is a totally different deploy<Header />
            <Header />
            <DashboardNav />
            <JobListings user={user}/>
            <Footer />
        </div>
    )
}

export default Dashboard;
