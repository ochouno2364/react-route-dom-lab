import { Link } from 'react-router'

const MailboxList = (props) => {
    return (
        <>
        <section className='mailboxsqr'>
        <ul>
            {props.mailboxes.map((currentBox) => (
                <li key={currentBox._id}><Link to={`/mailboxes/${currentBox._id}`}>MailBox{currentBox._id}</Link></li>
            ))}
        </ul>
        </section>
        </>
    );
};
   

export default MailboxList;