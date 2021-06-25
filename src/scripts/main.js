import antiSoska from './antiSoska';
import selectActiveMenuLink from './selectActiveMenuLink';
import validateFormVeto from './forms/validateFormVeto';
import validateFormContacts from './forms/validateFormContacts';
import validateFormModal from './forms/validateFormModal';
import controlModal from './modal';
import smoothScroll from './smoothScroll';
import lockHeader from './stickyHeader';

antiSoska();
lockHeader();
selectActiveMenuLink();
validateFormVeto();
validateFormContacts();
validateFormModal();
controlModal();
smoothScroll();
