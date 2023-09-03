import { Stack, Typography } from '@mui/material';

type PageHeaderProps = {
  icon?: React.ReactElement;
  title: string;
  subtitle?: string;
};

const PageHeader = ({ icon, title, subtitle }: PageHeaderProps) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyItems="center"
      spacing={1}
    >
      {icon}
      <Stack>
        <Typography variant="h3" component="h3" gutterBottom>
          {title}
        </Typography>
        {subtitle && <Typography variant="subtitle2">{subtitle}</Typography>}
      </Stack>
    </Stack>
  );
};

export default PageHeader;
