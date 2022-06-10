import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import serializeForm from "form-serialize";

const CreateContact = ({onCreateContact}) => {

    const handleSubmit = (event) =>{
        event.preventDefault();
        const values = serializeForm(event.target, {hash: true} )

        if(onCreateContact){
            onCreateContact(values);
        }

        console.log("Values:", values)
    }

    return  (
        <div>
            <Link className =  "close-create-contact" to="/">
                Close
            </Link>
            <form className = "create-contact-form" onSubmit={handleSubmit}>
                <ImageInput className = "create-contact-avatar-input" name ="avatarURL" maxHeight = {64}/>
                <div className="create-contact-details">
                     <input type="text" className="name" placeholder="Name"/>
                     <input type="text" className="handle" placeholder="Handle"/>
                     <button>Add Contact</button>
                 </div>
            </form>
        </div>
    )
}

export default CreateContact;