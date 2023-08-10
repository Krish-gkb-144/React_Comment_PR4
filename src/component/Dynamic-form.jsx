import { useState } from "react";

const DynamicForm = () => {

    const [input, setInput] = useState([
        {   
            id: '',
            name: '',
            email: '',
            teachername: '',
            data: '',
            contact: '',
        }
    ])

    const addMore = () => {
        let single = { id: '', name: '', email: '', teachername: '', data: '', contact: '' };
        let data = [...input, single];
        setInput(data);
    }
    const dataDelete = (index) => {
        let data = [...input];
        data.splice(index, 1);
        setInput(data);
    }
    const handleChange = (index, event) => {
        let data = [...input];
        data[index][event.target.name] = event.target.value;
        setInput(data);
    }
    return (
        <>
            <center>
                <h1>React - Add & Delete Table Rows Dynamically</h1>
                <table >
                    <thead>
                        <tr style={{ backgroundColor: "#282c3499", border: "0" }}>
                            <th style={{ width: "50px" }}>#</th>
                            <th style={{ width: "" }}>ID</th>
                            <th style={{ width: "" }}>STUDENT</th>
                            <th style={{ width: "" }}>Email</th>
                            <th style={{ width: "" }}>TEACHER NAME</th>
                            <th style={{ width: "" }}>DATE</th>
                            <th style={{ width: "" }}>CONTACT</th>
                            <th style={{ width: "50px", height: "50px" }}><button style={{ width: "30px", height: "30px",fontSize:"18px" }} onClick={() => addMore()}>+</button></th>
                        </tr>
                    </thead>
                    <tbody style={{  border: "0", textAlign: "center" }}>
                        {
                                input.map((item, index) => {
                                    if(index%2==0){
                                        return (
                                            <tr key={index} style={{backgroundColor: "#282c3421"}}>
                                                <td style={{ width: "50px", textAlign: "center" }}>{index + 1}</td>
                                                <td><input style={{ width: "100px", textAlign: "center", backgroundColor: "transparent", border: "0", outline: "none", height: "35px", fontSize: "18px", border: "0" }} type="text" name="id" value={input.id} onChange={(e) => handleChange(index, e)} /></td>
                                                <td><input style={{ width: "200px" }} type="text" name="name" value={input.name} onChange={(e) => handleChange(index, e)} /></td>
                                                <td><input style={{ width: "300px" }} type="text" name="email" value={input.email} onChange={(e) => handleChange(index, e)} /></td>
                                                <td><input style={{ width: "200px" }} type="text" name="teachername" value={input.teachername} onChange={(e) => handleChange(index, e)} /></td>
                                                <td><input style={{ width: "150px" }} type="text" name="data" value={input.data} onChange={(e) => handleChange(index, e)} /></td>
                                                <td><input style={{ width: "150px" }} type="text" name="contact" value={input.contact} onChange={(e) => handleChange(index, e)} /></td>
                                                <td style={{ width: "75px" }}><button style={{ width: "30px", height: "30px",fontSize:"18px" ,backgroundColor:"gray",color:"white" }} onClick={() => dataDelete(index)}>-</button></td>
                                            </tr>
                                        )
                                    }else{
                                        return (
                                            <tr key={index} style={{backgroundColor: "#00000030"}}>
                                                <td style={{ width: "50px", textAlign: "center" }}>{index + 1}</td>
                                                <td><input style={{ width: "100px", textAlign: "center", backgroundColor: "transparent", border: "0", outline: "none", height: "35px", fontSize: "18px", border: "0" }} type="text" name="id" value={input.id} onChange={(e) => handleChange(index, e)} /></td>
                                                <td><input style={{ width: "200px" }} type="text" name="name" value={input.name} onChange={(e) => handleChange(index, e)} /></td>
                                                <td><input style={{ width: "300px" }} type="text" name="email" value={input.email} onChange={(e) => handleChange(index, e)} /></td>
                                                <td><input style={{ width: "200px" }} type="text" name="teachername" value={input.teachername} onChange={(e) => handleChange(index, e)} /></td>
                                                <td><input style={{ width: "150px" }} type="text" name="data" value={input.data} onChange={(e) => handleChange(index, e)} /></td>
                                                <td><input style={{ width: "150px" }} type="text" name="contact" value={input.contact} onChange={(e) => handleChange(index, e)} /></td>
                                                <td style={{ width: "75px" }}><button style={{ width: "30px", height: "30px",fontSize:"18px",backgroundColor:"gray",color:"white" }} onClick={() => dataDelete(index)}>-</button></td>
                                            </tr>
                                        )
                                    }
                                    
                                })
                            
                            
                        }  
                    </tbody>
                </table>
            </center>
        </>
    )
}

export default DynamicForm;