import Button from '@mui/material/Button';
import Link from 'next/link';

interface INavLinksProps {
  activePath?: string;
  className?: string;
  links?: Array<{ label: string; href: string }>;
}

const NavLinks = ({ activePath, className, links }: INavLinksProps) => {
  return (
    <div className={`h-100 d-flex ai-center col-gap-1`}>
      {links &&
        links?.map((link, idx) => {
          const isActive = activePath === link.href;

          if (isActive) {
            return (
              <Button key={idx} sx={{ borderRadius: 0, borderBottom: 2 }}>
                {link.label}
              </Button>
            );
          }

          return (
            <Link key={idx} href={link.href}>
              <Button sx={{ borderRadius: 0 }}>{link.label}</Button>
            </Link>
          );
        })}
    </div>
  );
};

export default NavLinks;
