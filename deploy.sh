#!/bin/bash

# workplace-type-test 배포 스크립트

set -e

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

log "🚀 workplace-type-test 배포 시작"

# 빌드
log "🔨 프론트엔드 빌드 중..."
npm run build

# Docker 네트워크 확인
if ! docker network ls | grep -q "shared-apps-network"; then
    log "📝 shared-apps-network 생성 중..."
    docker network create shared-apps-network
fi

# Docker 컨테이너 중지 및 제거
log "🛑 기존 컨테이너 중지 중..."
docker-compose down 2>/dev/null || true

# Docker 이미지 빌드
log "📦 Docker 이미지 빌드 중..."
docker-compose build

# 서비스 시작
log "▶️ 서비스 시작 중..."
docker-compose up -d

# 상태 확인
log "📊 서비스 상태 확인 중..."
sleep 10
docker-compose ps

log "✅ workplace-type-test 배포 완료!"
log "🌐 접속 URL:"
log "   • 로컬: http://localhost:3005"
log "   • 프로덕션: https://workplace-type-test.prod.kro.kr"