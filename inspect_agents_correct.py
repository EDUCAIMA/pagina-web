import sys
import os
# Ensure we can find 'app'
sys.path.append("/Users/air/Downloads/4. SOFTWARE PROYECTOS/saas-whatsapp-ai/backend")

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app import models

# Absolute path to the real DB
db_path = "/Users/air/Downloads/4. SOFTWARE PROYECTOS/saas-whatsapp-ai/backend/sql_app.db"
SQLALCHEMY_DATABASE_URL = f"sqlite:///{db_path}"

print(f"Connecting to DB at: {SQLALCHEMY_DATABASE_URL}")

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

session = SessionLocal()

try:
    agents = session.query(models.Agent).all()
    print(f"Found {len(agents)} agents.")
    for a in agents:
        print(f"Agent ID: {a.id}")
        print(f"Name: {a.name}")
        print(f"System Prompt: {a.system_prompt}")
        print("-" * 20)
except Exception as e:
    print(f"Error querying agents: {e}")
finally:
    session.close()
