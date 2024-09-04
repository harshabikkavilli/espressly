
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const SUMMARY = [
  {
    title: 'Professional Tour Guides',
    description: 'Nunc nonummy metus. Donec elit libero',
    icon: '/assets/icons/ic_popularity.svg',
  },
  {
    title: 'Personalized Recommendations',
    description: 'Nunc nonummy metus. Donec elit libero',
    icon: '/assets/icons/ic_creativity.svg',
  },
  {
    title: 'Itinerary Planner',
    description: 'Nunc nonummy metus. Donec elit libero',
    icon: '/assets/icons/travel/ic_travel_verified_hotels.svg',
  },
];

export default function FeaturesSection() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mx: 'auto',
          maxWidth: 480,
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h3">Fastest Way to achive your travel goals</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Discover the exceptional features that make our app stand out.
        </Typography>
      </Stack>

      <Container sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 8, md: 3 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {SUMMARY.map((value) => (
            <Stack key={value.title} spacing={2}>
              <Box
                component="span"
                className="svg-color"
                sx={{
                  display: 'inline-block',
                  bgcolor: 'currentColor',
                  mask: `url(${value.icon}) no-repeat center / contain`,
                  WebkitMask: `url(${value.icon}) no-repeat center / contain`,
                  mb: 3,
                  width: 64,
                  height: 64,
                  mx: 'auto',
                  color: 'primary.main',
                }}
              />

              <Typography variant="h5">{value.title}</Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {value.description}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Container>
    </Container>
  );
}
