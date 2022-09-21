import { useEffect, useRef, useState } from 'react';
import DropdownMenu from './DropdownMenu';
import DropdownToggle from './DropdownToggle';

function ProfileIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownEl = useRef();

  useEffect(() => {
    const handleClickOutside = e => {
      if (!dropdownEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="d-flex justify-content-end flex-1">
      <div className="dropdown" ref={dropdownEl}>
        <DropdownToggle onClick={() => setIsOpen(prev => !prev)} />
        <DropdownMenu open={isOpen} />
      </div>
    </div>
  );
}

export default ProfileIcon;
