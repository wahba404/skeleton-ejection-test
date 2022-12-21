import { useParams, useNavigate, useLocation } from 'react-router-dom';

const currentLocation = (locationObject) => {
    // switch(locationObject.pathname) {
    //     case '/bulk-rules-from-csv':
    //         return 'Generate Base Rules from CSV File';
    //     break;

    //     case '/visual-rules-config':
    //         return 'Visual Rules Configuration';
    //     break;

    //     default:
    //         return '';
    // }
    return "";
}

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams()
    return (
      <Component
        navigate={navigate}
        location={location}
        params={params}
        current={currentLocation(location)}
        {...props}
        />
    );
  };
  
  return Wrapper;
};

