import { Link } from 'react-router'

const MailboxList = (props) => {
    return (
        <>
        <section className='mailboxsqr'>
        <ul>
            {props.mailboxes.map((currentMailbox) => (
                <li key={currentMailbox._id}><Link to={`/mailboxes/${currentMailbox._id}`}>MailBox{currentMailbox._id}</Link></li>
            ))}
        </ul>
        </section>
        </>
    );
};
   

export default MailboxList;