import {ChangeEvent, useEffect, useState} from "react";
import {getUserProfileData, updateUserData} from "../../Services/AuthService.tsx";
import './ProfilePage.css'
import {ChangeEventHandler, MouseEventHandler} from "react";
import {UserType} from "../../types/user.type.ts";

interface ProfileInfoPropsType {
    profile: UserType,
    isEditMode: boolean,
    onChange: (arg0: string) => ChangeEventHandler<HTMLInputElement> | undefined
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    const fields = [
        {label: 'Full Name:', value: props.profile.name, name: 'name'},
        {label: 'Address:', value: props.profile.address, name: 'address'},
        {label: 'Email:', value: props.profile.email, name: 'email'},
        {label: 'Date of Birth:', value: props.profile.dateOfBirth, name: 'dateOfBirth'},
        {label: 'Gender:', value: props.profile.gender, name: 'gender'},
        {label: 'Registration No:', value: props.profile.vehicleRegNo, name: 'vehicleRegNo'},
        {label: 'Insurance ID:', value: props.profile.insuranceId, name: 'insuranceId'},
        {label: 'Driving License:', value: props.profile.drivingLicense, name: 'drivingLicense'},
    ];

    return (
        <div className="info">
            {fields.map((field) => (
                <div key={field.name}
                     className={`info-item d-flex flex-row align-items-center gap-3 ${props.isEditMode ? 'justify-content-between' : 'justify-content-start'}`}>
                    <div className="fw-bold text-body-tertiary">{field.label}</div>
                    <div>
                        {props.isEditMode ? (
                            <input className="form-control"
                                   type={field.name === 'dateOfBirth' ? 'date' : 'text'}
                                   value={field.value}
                                   onChange={props.onChange(field.name)}
                            />
                        ) : <div className="text-success-emphasis my-auto fw-light">{field.value || 'Not available'}</div>}
                    </div>
                </div>
            ))}
        </div>
    );
};

interface ProfileEditPropsType {
    profile: UserType,
}

const ProfileHeader = (props: ProfileEditPropsType) => {
    return (
        <div className="header d-flex flex-column justify-content-center align-items-center">
            <img
                src={'https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                alt="Profile Photo"
                className="profile-photo"
            />
            <h1 className="h2 text-center">{props.profile.name || 'Unknown'}</h1>
            <h6 className="text-body-tertiary text-center fw-light text-success small">{props.profile._id || 'Unknown'}</h6>
        </div>
    );
};

interface ProfileActionsPropsType {
    isEditMode: boolean;
    handleEdit: MouseEventHandler<HTMLButtonElement> | undefined,
    handleSave: MouseEventHandler<HTMLButtonElement> | undefined,
    onCancelEdit: () => void,
}

const ProfileActions = (props: ProfileActionsPropsType) => {
    return (
        <div className="actions">
            {props.isEditMode ? (
                <div className="d-flex flex-row gap-2">
                    <button className="btn btn-success btn-sm" onClick={props.handleSave}>
                        <i className="fa-regular fa-floppy-disk pe-2"></i> Save
                    </button>
                    <button className="btn btn-warning btn-sm" onClick={props.onCancelEdit}>
                        <i className="fa-solid fa-xmark pe-2"></i>Cancel
                    </button>
                </div>
            ) : (
                <button className="btn btn-sm btn-info" onClick={props.handleEdit}>
                    <i className="fa-solid fa-pen-to-square pe-2"></i>Edit
                </button>
            )}
        </div>
    );
};
export const ProfileEditPage = () => {
    const [profile, setProfile] = useState<UserType>({
        _id: "",
        address: "",
        dateOfBirth: "",
        email: "",
        gender: "",
        id: 0,
        insuranceId: "",
        name: "",
        password: "",
        vehicleRegNo: "",
        drivingLicense: "", // Added drivingLicense field
    });
    
    const [isEditMode, setIsEditMode] = useState(false);
    const [, setCancelEdit] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleEdit = () => {
        setIsEditMode(true);
        setCancelEdit(false); // Reset cancelEdit state when entering edit mode
    };

    const getUserProfile = () => {
        getUserProfileData().then((data) => {
            let formattedDateOfBirth = '';
            if (data.data.data.dateOfBirth) {
                const date = new Date(data.data.data.dateOfBirth);
                if (!isNaN(date.getTime())) { // Check if the date is valid
                    formattedDateOfBirth = date.toISOString().substring(0, 10);
                }
            }
            setProfile({
               ...data.data.data,
                dateOfBirth: formattedDateOfBirth
            });
            console.log(data.data.data)
        })
    }

    useEffect(() => {
        getUserProfile()
    }, []);

    const onCancelEdit = () => {
        setIsEditMode(false);
        setCancelEdit(false); // Optionally reset cancelEdit state here
    };

    const handleSave = async () => {
        setLoading(true);
        updateUserData(profile).then((data) => {
            console.log(data);
            getUserProfile()
            setLoading(false)
            setIsEditMode(false);
        }).catch(error => {
            console.error('Error updating profile:', error);
            alert('Error updating profile!');
        })

    };
    
    const handleChange = (field: string) => (event: ChangeEvent<HTMLInputElement>) => {
        setProfile((prevProfile) => ({...prevProfile, [field]: event.target.value})); 
    };

    return (
        <div className="container w-100 d-flex justify-content-center align-items-center">
            <ProfileHeader profile={profile}/>
            <ProfileInfo profile={profile} isEditMode={isEditMode} onChange={(e) => handleChange(e)}/>
            <ProfileActions isEditMode={isEditMode} handleEdit={handleEdit} handleSave={handleSave}
                            onCancelEdit={onCancelEdit}/>
            {loading && <div>Loading...</div>}
        </div>

    );
};
