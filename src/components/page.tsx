import React from 'react';
import Header from './header';
import SideBar from './sideBar';
import Footer from './footer';
import Main from './main';

function Page() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex flex-1">
                {/* Sidebar */}
                <div className="w-auto">
                    <SideBar />
                </div>
                {/* Main Content */}
                <div className="flex-1">
                    <Main />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Page;
