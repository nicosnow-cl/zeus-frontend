import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Progress } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

import getBreadcrumb from '../../../../helpers/getBreadcrumb';
import HomeIcon from '../../../icons/Home';
import ColorModeSwitch from '../../../ui/ColorModeSwitch';
import { NavbarDown } from '../../../ui/NavbarDown';

const Down = () => {
  const pathname = usePathname();

  const breadcrumbs = getBreadcrumb(pathname);

  return (
    <Box shadow="sm" marginLeft="40px">
      <NavbarDown>
        <Breadcrumb fontWeight="medium" fontSize="sm">
          {breadcrumbs.map((breadcrumb, idx) => (
            <BreadcrumbItem key={idx} isCurrentPage={idx === breadcrumbs.length - 1}>
              <BreadcrumbLink
                href={breadcrumb.href}
                display="flex"
                alignItems="center"
                flexWrap="wrap"
              >
                {breadcrumb.code === 'home' ? <HomeIcon /> : breadcrumb.code}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>

        <ColorModeSwitch />
      </NavbarDown>

      {/* <Progress w="100%" size="xs" colorScheme="primary" isIndeterminate /> */}
    </Box>
  );
};

export default Down;
