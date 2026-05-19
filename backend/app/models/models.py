from sqlalchemy import Column, Integer, String, Text, ForeignKey, DECIMAL, Time
from sqlalchemy.orm import relationship
from app.database import Base

class Tariff(Base):
    __tablename__ = "tariffs"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), nullable=False)
    type = Column(String(50), nullable=False)
    description = Column(Text, nullable=True)
    
    rates = relationship("TariffRate", back_populates="tariff", cascade="all, delete-orphan")

class TariffRate(Base):
    __tablename__ = "tariff_rates"
    id = Column(Integer, primary_key=True, index=True)
    tariff_id = Column(Integer, ForeignKey("tariffs.id", ondelete="CASCADE"), nullable=False)
    
    time_start = Column(Time, nullable=False)
    time_end = Column(Time, nullable=False)
    
    price_per_kwh = Column(DECIMAL(10, 4), nullable=False)
    
    tariff = relationship("Tariff", back_populates="rates")