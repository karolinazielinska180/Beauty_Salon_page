import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from "react-dom/client";
import HomePage from "./HomePage";
import Client from "./client/Client";
import Worker from "./worker/Worker";
import Visit from "./visit/Visit";
import Layout from "./Layout";
import "./App.css";
import ViewOneClient from "./client/ViewOneClient";
import ViewOneWorker from "./worker/ViewOneWorker";
import ViewOneVisit from "./visit/ViewOneVisit";
import EditClient from "./client/EditClient";
import EditWorker from "./worker/EditWorker";
import EditVisit from "./visit/EditVisit";
import AddClient from "./client/AddClient";
import DeleteClient from "./client/DeleteClient";
import DeleteWorker from "./worker/DeleteWorker";
import DeleteVisit from "./visit/DeleteVisit";
export default function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="client" element={<Client/>}/>
                    <Route path="worker" element={<Worker/>}/>
                    <Route path="visit" element={<Visit/>}/>

                    <Route path="/client/viewoneclient/:id" element={<ViewOneClient/>}/>
                    <Route path="/client/editclient/:id" element={<EditClient/>}/>
                    <Route path="/client/addclient" element={<AddClient/>}/>
                    <Route path="/client/deleteclient/:id" element={<DeleteClient/>}/>

                    <Route path="/worker/viewoneworker/:id" element={<ViewOneWorker/>}/>
                    <Route path="/worker/editworker/:id" element={<EditWorker/>}/>
                    <Route path="/worker/deleteworker/:id" element={<DeleteWorker/>}/>

                    <Route path="/visit/viewonevisit/:id" element={<ViewOneVisit/>}/>
                    <Route path="/visit/editvisit/:id" element={<EditVisit/>}/>
                    <Route path="/visit/deletevisit/:id" element={<DeleteVisit/>}/>



                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


