# 프로젝트 이미지

프로젝트별로 폴더를 나누어 이미지를 관리합니다.

## 폴더 구조

```
images/projects/
├── {프로젝트-slug}/
│   ├── thumb.png      # 썸네일 (필수)
│   ├── hero.png       # 상세 페이지 히어로 (선택)
│   ├── capture.png    # 페이지 캡쳐 (선택)
│   └── *.json        # 모션 Lottie (선택)
```

## 규칙

- `thumb.png`: 썸네일, 권장 비율 1:1
- `hero.png`: 상세 페이지 상단 배경
- `capture.png`: 상세 페이지 캡쳐 이미지
- `js/projects-data.js`의 경로와 일치시켜 주세요.
