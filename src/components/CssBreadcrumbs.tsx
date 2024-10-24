import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, BoxProps, Breadcrumbs, Typography } from '@mui/material';
import Link from 'next/link';

interface Props extends BoxProps {
  configs: Array<{ link?: string; label: string; formatter?: (label: string) => string }>;
}

export default function CssBreadcrumbs({ configs, ...props }: Props) {
  function DefaultFormatter(label: string) {
    const textArray = label.split(' ');
    let result = '';
    for (const subText of textArray)
      result += subText[0].toUpperCase() + subText.substring(1).toLowerCase() + ' ';
    const _len = result.length;
    return result.slice(0, _len - 1);
  }
  return (
    <Box {...props}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
        {configs.map((item, index) => {
          const formatter = item?.formatter;
          return item.link ? (
            <Link key={index} href={item.link} className="no-underline">
              <Typography color="textSecondary">
                {formatter ? formatter(item.label) : DefaultFormatter(item.label)}
              </Typography>
            </Link>
          ) : (
            <Typography color="textSecondary" key={index}>
              {formatter ? formatter(item.label) : DefaultFormatter(item.label)}
            </Typography>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
}
