import { Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="main special">
            <header className="major">
                <h2>학원 소개</h2>
                <p>
                    SYOGATES는 요가, 필라테스, 자이로토닉을 통해 고객의 건강과 균형을 회복하는 프라이빗 스튜디오입니다.
                </p>
            </header>
            <p className="major">
                10년 이상의 운영 노하우, 전문 강사진, 쾌적한 환경을 자랑하는 스튜디오입니다.
                <br />
                현대인에게 필요한 힐링과 활력을 제공합니다.
            </p>
            <Modals />

        </section>
    );
};

const overlayTitles: Record<string, string> = {
    YOGA: "요가",
    PILATES: "필라테스",
    GYROTONIC: "자이로토닉",
}

const descriptions: Record<string, string> = {
    YOGA: "요가는 신체의 유연성을 높이고 스트레스를 완화하는 데 도움이 됩니다. 심신의 안정과 내면의 평화를 가져옵니다.",
    PILATES: "필라테스는 코어 근육을 강화하고 자세를 교정하는 운동입니다. 재활 및 체형 교정에 효과적입니다.",
    GYROTONIC: "자이로토닉은 척추의 움직임과 관절의 유연성을 중시하며, 전신 순환과 에너지 흐름을 활성화시킵니다.",
};

const Modals: React.FC = () => {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <>
            <div className="mt-[50px] flex justify-center gap-[20px]">
                {["YOGA", "PILATES", "GYROTONIC"].map((label) => (
                    <div key={label}>
                        <img
                            src={`/images/${label.toLowerCase()}_sample.jpg`}
                            alt={label}
                            className="w-[300px] h-[200px] cursor-pointer hover:opacity-90 transition duration-300"
                            onClick={() => setSelected(label)}
                        />
                    </div>
                ))}
            </div>

            <Dialog
                open={selected !== null}
                onClose={() => setSelected(null)}
                maxWidth="sm"
                fullWidth
            >
                <Card sx={{ p: 3, position: "relative" }}>
                    {/* <IconButton
                        aria-label="close"
                        onClick={() => setSelected(null)}
                        size="small"
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: "#333", 
                            backgroundColor: "transparent", 
                            padding: 4, 
                            "&:hover": {
                                backgroundColor: "#eee", 
                                color: "#000", 
                            },
                        }}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton> */}
                    <DialogTitle sx={{ color: "black" }}>{selected ? `${overlayTitles[selected]}의 효능` : ""}</DialogTitle>
                    <DialogContent dividers>
                        <Typography>{selected ? descriptions[selected] : ""}</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setSelected(null)}>닫기</Button>
                    </DialogActions>
                </Card>
            </Dialog>
        </>
    );
};

export default AboutSection;