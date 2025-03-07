import { whyJoinUs } from "@/constants/fakeData";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { styled } from "@mui/system";

const BenefitCard = styled(Card)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
  margin: theme.spacing(2),
}));

const WhyJoinUsBanner = () => {
  return (
    <Box sx={{ textAlign: "center", padding: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 4 }}>
        Những điều tuyệt vời bạn nhận được khi tham gia cùng chúng tôi!
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {whyJoinUs.map((benefit, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <BenefitCard>
              <Typography variant="h3" component="div">
                {benefit.icon}
              </Typography>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {benefit.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {benefit.description}
                </Typography>
              </CardContent>
            </BenefitCard>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" sx={{ marginTop: 4 }}>
        THỰC HIỆN TRẮC NGHIỆM NGAY
      </Button>
    </Box>
  );
};

export default WhyJoinUsBanner;
