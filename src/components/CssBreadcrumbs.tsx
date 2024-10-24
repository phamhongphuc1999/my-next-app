import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, BoxProps, Breadcrumbs, Typography } from '@mui/material';
import Link from 'next/link';

interface Props extends BoxProps {
  configs: Array<{ link?: string; label: string; formatter?: (label: string) => string }>;
}

export default function CssBreadcrumbs({ configs, ...props }: Props) {
  return (
    <Box {...props}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
        {configs.map((item, index) => {
          const formatter = item?.formatter;
          return item.link ? (
            <Link key={index} href={item.link} className="no-underline">
              <Typography color="textSecondary">
                {formatter ? formatter(item.label) : item.label}
              </Typography>
            </Link>
          ) : (
            <Typography color="textSecondary" key={index}>
              {formatter ? formatter(item.label) : item.label}
            </Typography>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
}
