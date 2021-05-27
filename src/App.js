import {Component} from 'react';
import {connect} from 'react-redux'
import Filter from "./components/Filter/Filter";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import phonebookOperations from "./redux/phonebook/phonebook-operations";
import "./styles.css";
import "./App.scss";


class App extends Component {
  componentDidMount() {
    this.props.fetchContacts()
  }

  render() {  
    return (
      <div className="App">
        <div className="container">
          <div className="phonebook">
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            {this.props.isLoadingContacts && <h1>Loading</h1>}
            <ContactList />
          </div>
        </div>
      </div>
    );}
}

const mapStateToProps = state => ({
  isLoadingContacts: state.contacts.loading,
})

const mapDispatchToProps = dispatch => ({
fetchContacts: () => dispatch(phonebookOperations.fetchContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

